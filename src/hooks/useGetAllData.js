import { useQuery } from "@apollo/client";

function useGetAllData(query) {
  const { error, loading, data } = useQuery(query);

  return {
    error,
    loading,
    data,
  };
}

export default useGetAllData;
