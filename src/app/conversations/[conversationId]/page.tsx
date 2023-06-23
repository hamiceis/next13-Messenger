import { getConversation } from "@/actions/getConversation";

import { getMessages } from "@/actions/getMessages";
import { EmptyState } from "@/components/EmptyState";

import { Body } from "@/components/conversationId/Body";
import { Form } from "@/components/conversationId/Form";
import { Header } from "@/components/conversationId/Header";

interface IParams {
  conversationId: string;
}

export default async function ConversationId({ params }: { params: IParams} ){
  const conversation = await getConversation(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if(!conversation){
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    )
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
          <Header conversation={conversation} />
          <Body initialMessages={messages} />
          <Form />
      </div>
    </div>
  )
}