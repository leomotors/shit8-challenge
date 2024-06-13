function createGuard(timeStr: string) {
  const date = new Date(timeStr);

  return () => {
    if (new Date() < date) {
      return new Response(
        `You can only access this page after ${date.toLocaleString("th-TH")}`,
        {
          status: 403,
        }
      );
    }
  };
}

export const quizTimeGuard = createGuard("2024-06-13T13:00:00Z");
export const mcTimeGuard = createGuard("2024-06-13T13:30:00Z");
export const raputaTimeGuard = createGuard("2024-06-13T14:00:00Z");
