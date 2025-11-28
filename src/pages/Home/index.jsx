import Deck from "@/components/Deck/Deck";
import { DeckProvider } from "@/contexts/DeckContext";

export default function Home() {
  return (
    <DeckProvider>
      <Deck />
    </DeckProvider>
  );
}
