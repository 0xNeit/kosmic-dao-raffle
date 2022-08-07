import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { KosmicDaoRaffle } from "../target/types/kosmic_dao_raffle";

describe("kosmic-dao-raffle", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.KosmicDaoRaffle as Program<KosmicDaoRaffle>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
