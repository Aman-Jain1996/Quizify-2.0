import { toast } from "react-toastify";

const properties = {
  position: "bottom-right",
  autoClose: 1000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  pauseOnFocusLoss: false,
};

export const ToastHandler = (type, message) => {
  if (type === "error") toast.error(message, properties);
  else if (type === "warn") toast.warn(message, properties);
  else if (type === "success") toast.success(message, properties);
  else if (type === "info") toast.info(message, properties);
};