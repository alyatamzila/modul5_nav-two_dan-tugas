import { Redirect } from "expo-router";
import "expo-router/entry";

const Root = () => {
  return <Redirect href="/home" />;
};

export default Root;
