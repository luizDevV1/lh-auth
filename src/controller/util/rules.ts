export class Rules {
  public required = (args: string): true | string => {
    return (!!args && args.length > 0) || "Campo Obrigatório!";
  };
}

export default new Rules();
