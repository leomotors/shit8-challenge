import fs from "node:fs/promises";

const ticket = "WONDERHOY";

export async function getTicket() {
  const ticketSeen = (await fs.readdir(".astro")).some(
    (file) => file === "ticket-seen"
  );

  if (!ticketSeen) {
    await fs.writeFile(
      ".astro/ticket-seen",
      `${new Date().toLocaleString("th-TH")}`
    );
  }

  return {
    ticket,
    ticketSeen,
  };
}
