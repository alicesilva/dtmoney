import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashoboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}