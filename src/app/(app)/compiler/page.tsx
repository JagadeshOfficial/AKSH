import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Play } from "lucide-react";

export default function CompilerPage() {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold">Online Compiler</h1>
            <p className="text-muted-foreground">Write, compile, and run your code directly in the browser.</p>
        </div>
        <div className="flex gap-4">
            <Select defaultValue="javascript">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="csharp">C#</SelectItem>
                </SelectContent>
            </Select>
            <Button>
                <Play className="mr-2 h-4 w-4" />
                Run Code
            </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Code Editor</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex">
            <Textarea 
                placeholder="console.log('Hello, LMS Edge!');" 
                className="flex-1 resize-none font-mono text-sm"
            />
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Output</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 bg-muted/50 rounded-b-lg">
            <pre className="p-4 text-sm font-mono whitespace-pre-wrap">
                <code>{`Waiting for code execution...`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
