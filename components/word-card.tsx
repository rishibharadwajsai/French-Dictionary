import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { DictionaryWord } from "@/data/dictionary";

interface WordCardProps {
  word: DictionaryWord;
}

export default function WordCard({ word }: WordCardProps) {
  return (
    <Card className="mb-6 overflow-hidden border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="bg-slate-50 dark:bg-slate-900 pb-2">
        <CardTitle className="flex justify-between items-center">
          <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            {word.word}
          </span>
          <Badge variant="outline" className="text-sm font-normal text-black dark:text-slate-100">
            {word.meaning.split(",")[0]}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="text-slate-600 dark:text-slate-300 mb-4">
          <span className="font-medium">Meaning: </span>
          {word.meaning}
        </div>

        <Accordion type="single" collapsible className="w-full">
          {word.contexts.map((context, index) => (
            <AccordionItem key={index} value={`context-${index}`}>
              <AccordionTrigger className="text-slate-700 dark:text-slate-200 hover:no-underline">
                <span className="font-medium">{context.context}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-700 mt-2 space-y-3">
                  {context.meaning && (
                    <p className="text-slate-600 dark:text-slate-300">
                      {context.meaning}
                    </p>
                  )}

                  {context.usage && (
                    <div className="mt-2">
                      <p className="text-slate-600 dark:text-slate-300 font-medium">Usage:</p>
                      <ul className="list-disc list-inside text-slate-500 dark:text-slate-400">
                        {context.usage.map((use, i) => (
                          <li key={i}>{use}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {context.usage1 && (
                    <div className="mt-2 p-2 bg-slate-100 dark:bg-slate-800 rounded-md">
                      <p className="text-slate-600 dark:text-slate-300 font-medium">Usage:</p>
                      <p className="text-slate-600 dark:text-slate-300">{context.usage1.usage}</p>
                      <p className="text-slate-500 dark:text-slate-400 italic mt-1">Example: {context.usage1.example}</p>
                    </div>
                  )}

                  {context.notUsed && (
                    <div className="mt-2 p-2 bg-red-100 dark:bg-red-800 rounded-md">
                      <p className="text-red-600 dark:text-red-300 font-medium">Not Used:</p>
                      <p className="text-red-600 dark:text-red-300">{context.notUsed.where}</p>
                      <p className="text-red-500 dark:text-red-400 italic mt-1">Example: {context.notUsed.example}</p>
                    </div>
                  )}

                  {context.examples && (
                    <div className="mt-2">
                      <p className="text-slate-600 dark:text-slate-300 font-medium">Examples:</p>
                      <ul className="list-disc list-inside space-y-1 text-slate-500 dark:text-slate-400">
                        {context.examples.map((example, i) => (
                          <li key={i} className="italic">{example}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {context.note && (
                    <div className="mt-2 p-2 bg-slate-100 dark:bg-slate-800 rounded-md">
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        <span className="font-medium">Note: </span>
                        {context.note}
                      </p>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
