import { IHouse } from "./IHouse";

interface SuccessResponse {
  houses: IHouse[];
  ok: true;
}

interface ErrorResponse {
  message: string;
  ok: false;
}

type ApiResponse = SuccessResponse | ErrorResponse;

export default ApiResponse;
