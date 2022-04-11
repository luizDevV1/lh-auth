import LoginInterface from "../../model/helper/login.interface";
import { Loading, QSpinnerFacebook } from "quasar";

class AuthFormData {
  public login(login: LoginInterface) {
    console.log(login);

    Loading.show({
      spinner: QSpinnerFacebook,
      message: "Aguarde",
      backgroundColor: "primary",
    });

    setTimeout(() => {
      Loading.hide();
    }, 1_500);
  }
}

export default new AuthFormData();
