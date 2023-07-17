import { useQuery } from "@apollo/client";

function useGetDataById(query, id) {
  const { error, loading, data } = useQuery(query, {
    variables: {
      id,
    },
  });

  return {
    error,
    loading,
    data,
  };
}

export default useGetDataById;
