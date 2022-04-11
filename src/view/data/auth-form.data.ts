import LoginInterface from "../../model/helper/login.interface";
import { Loading, QSpinnerFacebook } from "quasar";

class AuthFormData {
  public login(login: LoginInterface) {
    Loading.show({
      spinner: QSpinnerFacebook,
      message: "Aguarde",
      backgroundColor: "primary",
    });

    setTimeout(() => {
      Loading.hide();
    }, 3_000);
  }
}

export default new AuthFormData();
