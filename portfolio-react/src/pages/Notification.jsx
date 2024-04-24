import { App, Button, Space, Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setGeneration,
  setDataApi,
  setLoading,
} from "../reducers/NotificationReducer";
import useRequest from "../hooks/useRequest";

const Notification = () => {
  const dispatch = useDispatch();

  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success("Success!");
  };

  const generation = useSelector((state) => state.data.generation);
  const dataApi = useSelector((state) => state.data.dataApi);
  const loadingg = useSelector((state) => state.data.loading);

  const { data, loading, error } = useRequest(
    "https://www.boredapi.com/api/activity"
  );

  // useEffect(() => {
  //   fetch("https://www.boredapi.com/api/activity")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       dispatch(setDataApi(data));
  //       dispatch(setLoading(false));
  //     })
  //     .catch((error) => {
  //       console.log("I'm in .catch", error);
  //       dispatch(setLoading(false));
  //     });
  // }, [generation, dispatch]);

  const showModal = () => {
    modal.warning({
      title: "Activity Generation",
      content: "Your generation activity!!",
    });
  };

  const showNotification = () => {
    notification.info({
      message: `Activity Generation`,
      description: "Your generation activity!!",
      placement: "topLeft",
    });
  };

  const onGenerateActivity = () => {
    dispatch(setGeneration(!generation));
    let activity = dataApi.activity;
    sessionStorage.setItem("text", activity);
    localStorage.setItem("text", activity);
    showModal(activity);
  };

  if (loadingg) {
    return <Spin />;
  }

  return (
    <>
      <div>
        <h2>This is localStorage - {localStorage.getItem("text")}</h2>
      </div>
      <Space>
        <Button type="primary" onClick={showMessage}>
          Open message
        </Button>
        <Button type="primary" onClick={showNotification}>
          Open notification
        </Button>
        <div>
          <Button className="btn-clear" onClick={onGenerateActivity}>
            Generate activity
          </Button>
        </div>
      </Space>
      <h1>{dataApi.accessibility}</h1>
      <br />
      <br />
    </>
  );
};

export default () => (
  <App>
    <Notification />
  </App>
);
