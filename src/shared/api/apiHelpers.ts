import { axiosInstance } from '@/shared/api/axios';
import { AxiosError, AxiosResponse } from 'axios';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// ?
type RejectWithValueFn = any;

interface ApiStoreTrunksProps<TRequest> {
  method: HttpMethod;
  url: string;
  rejectWithValue: RejectWithValueFn;
  errorMessage?: string;
  body?: TRequest | {};
}

/**
 * Выполняет HTTP-запрос с помощью axiosInstance с учетом метода и параметров.
 *
 * @template TResponse - Тип данных, возвращаемых сервером.
 * @template TRequest - Тип данных, отправляемых на сервер (для POST, PUT, DELETE).
 *
 * @param {ApiStoreTrunksProps<TRequest>} props - Параметры запроса.
 * @returns {Promise<AxiosResponse<TResponse>>} - Промис с ответом axios.
 */
export async function apiStoreTrunks<TResponse = unknown, TRequest = any>(
  {
    method,
    url,
    rejectWithValue,
    errorMessage = 'Что-то пошло не так(',
    body = {},
  }: ApiStoreTrunksProps<TRequest>
): Promise<AxiosResponse<TResponse>> {
  try {
    let response: AxiosResponse<TResponse>;

    switch (method) {
      case 'GET':
        response = await axiosInstance.get<TResponse>(url, { params: body });
        break
      case 'DELETE':
        response = await axiosInstance.delete<TResponse>(url, { data: body });
        break;
      case 'POST':
        response = await axiosInstance.post<TResponse>(url, body);
        break;
      case 'PUT':
        response = await axiosInstance.put<TResponse>(url, body);
        break;
      default:
        throw new Error(`Неподдерживаемый метод: ${method}`);
    }

    return response;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    return  rejectWithValue(axiosError?.response?.data || errorMessage);
  }
}
