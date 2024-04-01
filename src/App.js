import AppRouter from "./routes/index";
import { CreateContext } from "./store/context";
export default function App() {
  return (
    <>
      <CreateContext>
        <AppRouter />
      </CreateContext>
    </>
  );
}
