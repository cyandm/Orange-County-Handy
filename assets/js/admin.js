/**
 * Admin scripts — service icon picker loads 10 icons at a time via AJAX
 */

(function ($) {
  const cache = {};
  const restUrl = (window.cynAdmin && window.cynAdmin.restUrl) || "";
  const nonce = (window.cynAdmin && window.cynAdmin.nonce) || "";

  function formatIcon(option) {
    if (!option.id) return option.text;

    const $row = $(
      '<span class="cyn-icon-option"><span class="cyn-icon-option__svg" aria-hidden="true"></span><span class="cyn-icon-option__name"></span></span>'
    );
    const $svg = $row.find(".cyn-icon-option__svg");

    $row.find(".cyn-icon-option__name").text(option.text);

    if (option.svg) {
      cache[option.id] = option.svg;
      $svg.html(option.svg);
    } else if (cache[option.id]) {
      $svg.html(cache[option.id]);
    } else {
      $.ajax({
        url: restUrl + "cyn/v1/icon",
        data: { name: option.id },
        beforeSend: function (xhr) {
          if (nonce) xhr.setRequestHeader("X-WP-Nonce", nonce);
        },
      }).done(function (data) {
        if (!data || !data.svg) return;
        cache[option.id] = data.svg;
        $svg.html(data.svg);
      });
    }

    return $row;
  }

  function bindIconSelect() {
    if (typeof acf === "undefined" || !acf.add_filter) return;

    acf.add_filter("select2_args", function (args, $select) {
      const $field = $select.closest(".acf-field[data-name='service_icon']");
      if (!$field.length) return args;

      args.ajax = {
        url: restUrl + "cyn/v1/icons",
        dataType: "json",
        delay: 200,
        data: function (params) {
          return {
            search: params.term || "",
            page: params.page || 1,
            per_page: 10,
          };
        },
        transport: function (params, success, failure) {
          const request = $.ajax({
            url: params.url,
            data: params.data,
            beforeSend: function (xhr) {
              if (nonce) xhr.setRequestHeader("X-WP-Nonce", nonce);
            },
          });
          request.then(success);
          request.fail(failure);
          return request;
        },
        processResults: function (data, params) {
          params.page = params.page || 1;

          return {
            results: (data.items || []).map(function (item) {
              cache[item.name] = item.svg;
              return { id: item.name, text: item.name, svg: item.svg };
            }),
            pagination: {
              more: !!data.more,
            },
          };
        },
        cache: true,
      };

      args.minimumInputLength = 0;
      args.templateResult = formatIcon;
      args.templateSelection = formatIcon;
      args.escapeMarkup = function (markup) {
        return markup;
      };

      return args;
    });
  }

  $(bindIconSelect);
})(jQuery);
