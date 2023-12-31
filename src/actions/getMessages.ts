import prisma from "@/libs/prismadb";

export async function getMessages(conversationId: string) {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId,
      },
      include: {
        seen: true,
        sender: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return messages;
  } catch (error) {
    console.log(error);
    return [];
  }
}
