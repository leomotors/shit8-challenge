import fs from "node:fs/promises";

const TICKET_DIR = "node_modules";

const ticket = "物語、動き出すんだ　感じあって響きあってくように";

export async function getTicketStatus() {
  const ticketSeen = (await fs.readdir(TICKET_DIR)).some(
    (file) => file === "ticket-seen"
  );

  return ticketSeen;
}

export async function getTicket() {
  const ticketSeen = await getTicketStatus();

  if (!ticketSeen) {
    await fs.writeFile(
      `${TICKET_DIR}/ticket-seen`,
      `${new Date().toLocaleString("th-TH")}`
    );
  }

  return {
    ticket,
    ticketSeen,
  };
}
