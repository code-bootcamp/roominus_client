import { useModal } from "../../components/commons/hooks/useModal";

export const checkFileValidation = (file?: File) => {
  const { WarningModal } = useModal();

  if (!file?.size) {
    WarningModal("사진 등록 실패", "파일이 없습니다!");
    return false;
    // return;
    // 이 return은 이 함수가 종료되는 것
    // 본 함수 종료시키려면 여기 if가 f일때를 설정해야 함
  }

  // 1024 = 1KB
  // 1024 * 1024 = 1MB
  if (file.size > 5 * 1024 * 1024) {
    alert("파일 크기가 5MB 이상입니다!");
    return false;
  }

  if (
    file.type.includes("jpeg") &&
    file.type.includes("png") &&
    file.type.includes("gif")
  ) {
    alert("jpeg, png, gif 파일만 업로드 가능합니다");
    return false;
  }

  return true;
};
