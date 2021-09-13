import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "types";
import { API_URL } from "api/end-points";

function useGetNotifications<T>(user: User) {
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<T>();

  useEffect(() => {
    const fetchDatas = async () => {
      const headers = { Authorization: `Bearer ${user.token}` };

      try {
        const response = await axios.get(
          `${API_URL}/api/accounts/${user.accountId}/alerts/${user.alertId}/mentions`,
          { headers }
        );

        setNotifications(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { error, loading, notifications };
}

export default useGetNotifications;
