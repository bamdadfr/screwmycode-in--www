import {API_BASE_URL} from 'src/constants';
import {type ListBody, ListResponse} from 'src/dtos';
import {useAuth} from 'src/hooks/use-auth';

export function useRankingsData() {
  const {token} = useAuth();

  const fetchData = async () => {
    const route = `${API_BASE_URL}/v2/list/`;
    const body: ListBody = {
      range: 'all',
      sort_by: 'hits',
      limit: 50,
    };

    const response = await fetch(route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    const typedResult = ListResponse.parse(result);
    return typedResult;
  };

  return {
    fetchData,
  };
}
