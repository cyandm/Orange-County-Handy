/**
 * Get a Quote wizard: steps, summary, photos and success state.
 */

const MAX_FILES = 8;
const MAX_SIZE = 10 * 1024 * 1024;
const ALLOWED = ["image/jpeg", "image/png", "image/webp"];

export function QuoteForm() {
  const wizard = document.querySelector("#quote_wizard");
  const form = document.querySelector("#quote_form");

  if (!wizard || !form) return;

  const steps = [...form.querySelectorAll("[data-quote-step]")];
  const summary = form.querySelector("[data-quote-summary]");
  const progress = form.querySelector("[data-quote-progress]");
  const actions = form.querySelector("[data-quote-actions]");
  const items = [...form.querySelectorAll("[data-step-item]")];
  const lines = [...form.querySelectorAll("[data-step-line]")];
  const label = form.querySelector("[data-step-label]");
  const prevBtn = form.querySelector("[data-quote-prev]");
  const nextBtn = form.querySelector("[data-quote-next]");
  const submitBtn = form.querySelector("[data-quote-submit]");
  const result = form.querySelector("#quote_form_result");
  const success = wizard.querySelector("#quote_success");
  const input = form.querySelector("#quote-photos");
  const dropzone = form.querySelector("#quote-dropzone");
  const preview = form.querySelector("#quote-photos-preview");
  const summaryPhotos = form.querySelector("#quote-summary-photos");
  const dateInput = form.querySelector("#quote-date");

  if (dateInput) {
    dateInput.addEventListener("click", () => {
      if (typeof dateInput.showPicker === "function") dateInput.showPicker();
    });
  }

  const total = steps.length;
  let current = 0;
  let photos = [];
  let photoUrls = [];

  const isSummary = () => current === total;

  const selectedLabel = (name) => {
    const checked = form.querySelector(`[name="${name}"]:checked`);
    if (checked) return checked.dataset.label || checked.value;

    const field = form.querySelector(`[name="${name}"]`);
    if (!field) return "";
    if (field.tagName === "SELECT") {
      const option = field.selectedOptions[0];
      return option && option.value ? option.dataset.label || option.textContent.trim() : "";
    }

    return field.value.trim();
  };

  const fillSummary = () => {
    form.querySelector('[data-summary="service"]').textContent = selectedLabel("service");
    form.querySelector('[data-summary="zip"]').textContent = selectedLabel("zip");
    form.querySelector('[data-summary="property"]').textContent = selectedLabel("property_type");
    form.querySelector('[data-summary="description"]').textContent = selectedLabel("description");
    form.querySelector('[data-summary="timeframe"]').textContent = selectedLabel("timeframe");
    form.querySelector('[data-summary="contact"]').textContent = selectedLabel("contact_method");

    summaryPhotos.textContent = "";
    summaryPhotos.classList.toggle("hidden", photos.length === 0);
    summaryPhotos.classList.toggle("grid", photos.length > 0);
    summaryPhotos.classList.toggle("lg:flex", photos.length > 0);

    photos.forEach((photo) => {
      const image = document.createElement("img");
      image.src = URL.createObjectURL(photo);
      image.alt = photo.name;
      image.className = "h-32 w-full flex-1 rounded-lg object-cover lg:h-44 lg:w-52 lg:flex-none lg:rounded-2xl";
      image.addEventListener("load", () => URL.revokeObjectURL(image.src), { once: true });
      summaryPhotos.append(image);
    });
  };

  const render = () => {
    const summaryView = isSummary();

    steps.forEach((step, index) => (step.hidden = summaryView || index !== current));
    if (summary) summary.hidden = !summaryView;
    if (progress) progress.hidden = summaryView;

    items.forEach((item, index) => {
      if (summaryView) item.dataset.state = "done";
      else item.dataset.state = index < current ? "done" : index === current ? "active" : "todo";
    });

    lines.forEach((line, index) => {
      line.dataset.state = summaryView || index < current ? "done" : "todo";
    });

    if (label && !summaryView) {
      label.textContent = label.dataset.stepTemplate.replace("{current}", current + 1).replace("{name}", steps[current].dataset.stepName);
    }

    if (summaryView) fillSummary();

    prevBtn.hidden = current === 0;
    nextBtn.hidden = summaryView;
    submitBtn.hidden = !summaryView;
  };

  const isStepValid = () => {
    if (isSummary()) return true;

    const fields = [...steps[current].querySelectorAll("input, select, textarea")];
    const invalid = fields.find((field) => !field.checkValidity());

    if (!invalid) return true;

    invalid.reportValidity();
    return false;
  };

  const go = (step) => {
    current = Math.min(Math.max(step, 0), total);
    render();
    wizard.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  nextBtn.addEventListener("click", () => isStepValid() && go(current + 1));
  prevBtn.addEventListener("click", () => go(current - 1));

  const revokeUrls = () => {
    photoUrls.forEach((url) => URL.revokeObjectURL(url));
    photoUrls = [];
  };

  const syncInput = () => {
    const data = new DataTransfer();
    photos.forEach((photo) => data.items.add(photo));
    input.files = data.files;
  };

  const renderPreview = () => {
    revokeUrls();
    preview.textContent = "";
    preview.classList.toggle("hidden", photos.length === 0);
    preview.classList.toggle("grid", photos.length > 0);

    photos.forEach((photo, index) => {
      const item = document.createElement("div");
      item.className = "group relative overflow-hidden rounded-lg border border-cynBorder lg:rounded-2xl";

      const image = document.createElement("img");
      const url = URL.createObjectURL(photo);
      photoUrls.push(url);
      image.src = url;
      image.alt = photo.name;
      image.className = "h-32 w-full object-cover lg:h-44";

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "absolute end-2 top-2 flex size-8 items-center justify-center rounded-lg bg-cynWhite text-cynTextBlack transition-all duration-300 hover:bg-cynYellow";
      remove.setAttribute("aria-label", input.dataset.removeLabel || "Remove photo");
      remove.textContent = "×";
      remove.addEventListener("click", () => {
        photos.splice(index, 1);
        syncInput();
        renderPreview();
      });

      item.append(image, remove);
      preview.append(item);
    });
  };

  const addPhotos = (list) => {
    [...list].forEach((photo) => {
      if (photos.length >= MAX_FILES) return;
      if (!ALLOWED.includes(photo.type) || photo.size > MAX_SIZE) return;
      photos.push(photo);
    });

    syncInput();
    renderPreview();
  };

  if (input && dropzone && preview) {
    input.addEventListener("change", () => addPhotos([...input.files]));

    ["dragenter", "dragover"].forEach((name) =>
      dropzone.addEventListener(name, (event) => {
        event.preventDefault();
        dropzone.dataset.state = "over";
      })
    );

    ["dragleave", "drop"].forEach((name) =>
      dropzone.addEventListener(name, (event) => {
        event.preventDefault();
        delete dropzone.dataset.state;
      })
    );

    dropzone.addEventListener("drop", (event) => addPhotos(event.dataTransfer.files));
  }

  form.addEventListener("htmx:beforeRequest", () => {
    submitBtn.classList.add("is-loading");
    result.hidden = true;
    result.textContent = "";
  });

  form.addEventListener("htmx:afterRequest", (event) => {
    submitBtn.classList.remove("is-loading");

    const ok = event.detail.successful;
    let message = "";

    try {
      const data = JSON.parse(event.detail.xhr.responseText);
      message = data.message || data.error || "";
    } catch (error) {
      message = "";
    }

    if (!ok) {
      result.textContent = message || "Something went wrong. Please try again.";
      result.classList.add("bg-cynRed", "text-cynTextWhite");
      result.classList.remove("bg-cynYellow", "text-cynTextBlack");
      result.hidden = false;
      return;
    }

    form.hidden = true;
    if (success) success.hidden = false;
    wizard.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  render();
}
