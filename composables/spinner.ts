import { useSpinnerStore } from "@/stores/spinner";

export function useSpinner() {
  const spinnerStore = useSpinnerStore();
  function showSpinner() {
    spinnerStore.changeSpinnerState(true);
  }
  function hideSpinner() {
    spinnerStore.changeSpinnerState(false);
    // setUploadProgressPercent(null);
  }
  function setUploadProgressPercent(value: number | null = null) {
    spinnerStore.setUploadProgressPercent(value);
  }
  const isLoading = computed<boolean>(() => {
    return spinnerStore.isLoading;
  });

  return { showSpinner, hideSpinner, setUploadProgressPercent, isLoading };
}
