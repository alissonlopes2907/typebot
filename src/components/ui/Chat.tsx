'use client'

import { AvatarFallback, Avatar, AvatarImage } from "./avatar"
import { Button } from "./button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card"
import { Input } from "./input"
import { useChat } from 'ai/react'
import { ScrollArea } from "./scroll-area"

export default function Chat(){

    const { messages, input, handleInputChange, handleSubmit} = useChat()
    return (
        <Card className="w-[440px]">
         <CardHeader>
           <CardTitle>Agente Inteligente</CardTitle>
          <CardDescription>Faça sua pergunta, estou aqui para ajudar!</CardDescription>
         </CardHeader>

       <CardContent>
        <ScrollArea className="w-full h-[500px] space-y-2 pr-4 ">
        { messages.map(message =>{
            return (
     
                
        <div key={message.id} className='flex gap-3  text-slate-600 text-sm mb-4'>
       {message.role ==='user' && (
        <Avatar>
         <AvatarFallback>AL</AvatarFallback>
         <AvatarImage src="https://github.com/alissonlopes2907.png" className="w-12 h-12 rounded-full object-cover "/>
        </Avatar>

       )} 

       {message.role === 'assistant' && (
        
         <Avatar>
         <AvatarFallback>Chapeu Preto</AvatarFallback>
         <AvatarImage src='https://github.com/rocketseat.png' className="w-12 h-12 rounded-full object-cover "/>
        </Avatar>
       )}
        
       
       <p className='leading-relaxed'>
         <span className='block font-bold text-slate-700'> {message.role === 'user' ? 'Usuário' : 'Agente'}:</span>
        {message.content}
       
       </p>

       </div>
            )
         })}
         </ScrollArea>
       </CardContent>

       <CardFooter>

        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
         <Input placeholder="Como posso ajudar você hoje?" value={input} onChange={handleInputChange}/>

         <Button type='submit' >Send</Button>

         </form>
       </CardFooter>
        </Card>     
    )
}