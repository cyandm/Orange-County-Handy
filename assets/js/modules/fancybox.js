import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function fancybox() {
  Fancybox.bind("[data-fancybox]", {
    groupAll: false,
    Thumbs: false,
    Toolbar: {
      display: {
        left: ["counter"],
        right: ["close"],
      },
    },
  });
}
