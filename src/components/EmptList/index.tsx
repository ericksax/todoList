import ClipBoard from "../../assets/Clipboard.svg";
import { Main } from "./styles";

export function EmptyList() {
  return (
    <Main>
      <img src={ClipBoard} alt="" />
      <strong>Você ainda não tem tarefas cadastradas </strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </Main>
  );
}
