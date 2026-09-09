import { devLog } from "./common";
/**
 * Initializes modal functionality for opening, closing, and toggling modals.
 * It uses specific HTML attributes to identify modal-related elements and manage their state.
 * Debugging information is logged to the console using the `devLog` function.
 *
 * @function
 * @name Modals
 * @example
 * // Example HTML:
 * <div modal data-modal-name="example-modal" data-active="false">
 *   <p>Modal Content</p>
 * </div>
 * <button modal-opener data-modal-name="example-modal">Open Modal</button>
 * <button modal-closer data-modal-name="example-modal">Close Modal</button>
 * <button modal-toggler data-modal-name="example-modal">Toggle Modal</button>
 *
 * @description
 * The function listens for `click` events on elements with the following attributes:
 * - `modal-opener`: Opens the corresponding modal.
 * - `modal-closer`: Closes the corresponding modal.
 * - `modal-toggler`: Toggles the visibility of the corresponding modal.
 *
 * When an opener or closer is clicked, the `data-active` attribute of the corresponding modal is set to either `true` (open) or `false` (closed).
 * When a toggler is clicked, the `data-active` attribute is toggled between `true` and `false`.
 *
 * The function logs the following to the console for debugging:
 * - The state changes of modals (opened or closed).
 * - The triggers (open, close, toggle) for each modal.
 *
 * @returns {void}
 */
export function Modals() {
  devLog("Modal function is running");
  const popupBackdrop = document.querySelector("[modal-backdrop]");
  const modals = document.querySelectorAll("[modal]");
  const discardSnapshots = new WeakMap();

  const isDiscardOnCloseEnabled = (modal) =>
    modal?.dataset?.modalDiscardOnClose === "true";

  const isModalDismissible = (modal) =>
    modal?.dataset?.modalDismissible !== "false";

  const getDiscardableFields = (modal) =>
    modal.querySelectorAll("input, textarea, select");

  const captureDiscardSnapshot = (modal) => {
    if (!isDiscardOnCloseEnabled(modal)) {
      return;
    }

    const snapshot = [];
    getDiscardableFields(modal).forEach((field) => {
      const fieldType = field.type ? field.type.toLowerCase() : "";
      if (fieldType === "checkbox" || fieldType === "radio") {
        snapshot.push({ field, checked: field.checked });
        return;
      }

      snapshot.push({ field, value: field.value });
    });

    discardSnapshots.set(modal, snapshot);
  };

  const restoreDiscardSnapshot = (modal) => {
    if (!isDiscardOnCloseEnabled(modal)) {
      return;
    }

    const snapshot = discardSnapshots.get(modal);
    if (!snapshot || !Array.isArray(snapshot)) {
      return;
    }

    snapshot.forEach((entry) => {
      if (!entry?.field) {
        return;
      }

      if (typeof entry.checked === "boolean") {
        entry.field.checked = entry.checked;
        return;
      }

      if (typeof entry.value !== "undefined") {
        entry.field.value = entry.value;
      }
    });
  };

  const syncBackdrop = () => {
    const activeModals = document.querySelectorAll(
      '[modal][data-active="true"]',
    );
    const hasDrawer = Array.from(activeModals).some(
      (modal) => modal.dataset.modalLayer === "drawer",
    );
    const hasPopup = Array.from(activeModals).some(
      (modal) => modal.dataset.modalLayer === "popup",
    );
    const hasActiveModal = activeModals.length > 0;

    if (!popupBackdrop) {
      document.body.style.overflow = hasActiveModal ? "hidden" : "auto";
      return;
    }

    popupBackdrop.dataset.active = hasActiveModal ? "true" : "false";
    popupBackdrop.dataset.elevated = hasDrawer && hasPopup ? "true" : "false";
    document.body.style.overflow = hasActiveModal ? "hidden" : "auto";
  };

  const closeModal = (modal) => {
    restoreDiscardSnapshot(modal);
    modal.dataset.active = "false";

    modal.dispatchEvent(
      new CustomEvent("modal-state-change", {
        detail: {
          handler: popupBackdrop,
        },
      }),
    );
  };

  if (!popupBackdrop) {
    devLog("Modal backdrop not found. Skipping backdrop click handler.");
  } else {
    popupBackdrop.addEventListener("click", (e) => {
      e.stopPropagation();

      const activeModals = Array.from(
        document.querySelectorAll('[modal][data-active="true"]'),
      );
      const hasDrawer = activeModals.some(
        (modal) => modal.dataset.modalLayer === "drawer",
      );
      const hasPopup = activeModals.some(
        (modal) => modal.dataset.modalLayer === "popup",
      );

      const modalsToClose = (
        hasDrawer && hasPopup
          ? activeModals.filter((modal) => modal.dataset.modalLayer === "popup")
          : activeModals
      ).filter(isModalDismissible);

      modalsToClose.forEach(closeModal);
      syncBackdrop();
    });
  }

  /**
   * Utility function to handle the state of a modal.
   *
   * @private
   * @param {string} modalName - The name of the modal to modify.
   * @param {string} state - The state to set (`'true'` or `'false'`).
   */
  const handleModalState = (modalName, state) => {
    const modals = document.querySelectorAll(
      `[modal][data-modal-name="${modalName}"]`,
    );
    if (!modals) {
      devLog(`Modal "${modalName}" not found.`);
      return;
    }

    modals.forEach((modal) => {
      if (state === "false" && !isModalDismissible(modal)) {
        return;
      }

      if (state === "true") {
        captureDiscardSnapshot(modal);
      } else {
        restoreDiscardSnapshot(modal);
      }

      modal.dataset.active = state;
    });

    syncBackdrop();

    devLog(`Modal "${modalName}" state set to "${state}".`);
  };

  /**
   * Adds click event listeners to elements matching the provided selector and performs the specified action.
   *
   * @private
   * @param {string} selector - The selector for modal-related elements (e.g., `[modal-opener]`).
   * @param {function} action - The action to perform when the element is clicked (e.g., opening, closing, toggling).
   * @param {string} actionName - A human-readable name for the action (e.g., "Open", "Close", "Toggle").
   */
  const addEventListeners = (selector, action, actionName) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const modalName = element.dataset.modalName;
      const modal = document.querySelector(
        `[modal][data-modal-name="${modalName}"]`,
      );

      element.addEventListener("click", () => {
        action(modalName);

        if (modal) {
          modal.dispatchEvent(
            new CustomEvent("modal-state-change", {
              detail: {
                handler: element,
              },
            }),
          );
        }
      });

      devLog(`"${actionName}" triggered for modal "${modalName}".`);
    });
  };

  //************************************************************************Code Logic

  // Open modals
  addEventListeners(
    "[modal-opener]",
    (modalName) => handleModalState(modalName, "true"),
    "Open",
  );

  // Close modals
  addEventListeners(
    "[modal-closer]",
    (modalName) => handleModalState(modalName, "false"),
    "Close",
  );

  // Toggle modals
  addEventListeners(
    "[modal-toggler]",
    (modalName) => {
      const modal = document.querySelector(
        `[modal][data-modal-name="${modalName}"]`,
      );

      if (!modal) {
        devLog(`Toggle failed: Modal "${modalName}" not found.`);
        return;
      }

      const newState = modal.dataset.active === "true" ? "false" : "true";

      if (newState === "false" && !isModalDismissible(modal)) {
        return;
      }

      devLog(`Toggling modal "${modalName}" to "${newState}".`);
      handleModalState(modalName, newState);
    },
    "Toggle",
  );

  document
    .querySelectorAll('[modal][data-auto-open="true"]')
    .forEach((modal) => {
      const loginLink = modal.querySelector("#wishlist-login-required-link");

      if (loginLink instanceof HTMLAnchorElement) {
        const url = new URL(loginLink.href, window.location.origin);
        url.searchParams.set("redirect_to", window.location.href);
        loginLink.href = url.toString();
      }

      handleModalState(modal.dataset.modalName, "true");
    });
}
