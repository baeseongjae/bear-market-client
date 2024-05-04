import { DealForm } from "../types/DealForm.type";

export function createFormData(dealFormData: DealForm) {
  const { image, ...dealFormDataNotImage } = dealFormData;

  const formData = new FormData();

  Object.entries(dealFormDataNotImage).forEach(([key, value]) => {
    formData.append(key, value);
  });
  if (image) formData.append("image", image);

  return formData;
}
