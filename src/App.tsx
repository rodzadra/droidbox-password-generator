import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { Switch } from "./components/ui/switch";
import { Input } from "./components/ui/input";
import { Slider } from "./components/ui/slider";
import { Button } from "./components/ui/button";
import logo from "./assets/logo-droidbox.png";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

function App() {
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    number: true,
    symbol: false,
    space: false,
  });
  const [password, setPassword] = useState("");

  const handleOptionChange =
    (key: keyof typeof options) => (checked: boolean) => {
      setOptions((prev) => ({ ...prev, [key]: checked }));
    };

  // Função para gerar senha
  function generatePassword() {
    let chars = "";
    if (options.upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (options.number) chars += "0123456789";
    if (options.symbol) chars += "!@#$%^&*()-_=+[]{};:,.<>?/|\\";
    if (options.space) chars += " ";
    if (!chars) return "";
    let pwd = "";
    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * chars.length);
      pwd += chars[idx];
    }
    return pwd;
  }

  const handleGenerate = () => {
    setPassword(generatePassword());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl text-center">
            <img
              src={logo}
              alt="DroidBox Logo"
              className="mx-auto mb-2 w-42 h-auto"
            />
            Password Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-medium">
              Number of characters
            </label>
            <div className="flex items-center gap-4">
              <Slider
                min={4}
                max={64}
                value={[length]}
                onValueChange={([val]) => setLength(val)}
                className="flex-1"
              />
              <span className="w-8 text-right tabular-nums">{length}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium mb-1">Options</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <Switch
                  checked={options.upper}
                  onCheckedChange={(v) => handleOptionChange("upper")(!!v)}
                />
                Uppercase Letters
              </label>
              <label className="flex items-center gap-2">
                <Switch
                  checked={options.lower}
                  onCheckedChange={(v) => handleOptionChange("lower")(!!v)}
                />
                Lowercase Letters
              </label>
              <label className="flex items-center gap-2">
                <Switch
                  checked={options.number}
                  onCheckedChange={(v) => handleOptionChange("number")(!!v)}
                />
                Numbers
              </label>
              <label className="flex items-center gap-2">
                <Switch
                  checked={options.symbol}
                  onCheckedChange={(v) => handleOptionChange("symbol")(!!v)}
                />
                Symbols
              </label>
              <label className="flex items-center gap-2">
                <Switch
                  checked={options.space}
                  onCheckedChange={(v) => handleOptionChange("space")(!!v)}
                />
                Spaces
              </label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="flex gap-2 w-full">
            <Input
              type="text"
              value={password}
              readOnly
              className="flex-1"
              placeholder="Your password will appear here"
            />
            <Button type="button" onClick={handleGenerate}>
              Generate
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                if (password) {
                  navigator.clipboard.writeText(password);
                  toast.success("Password copied to clipboard!");
                }
              }}
              disabled={!password}
              title="Copy password to clipboard"
            >
              Copy
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Toaster />
    </div>
  );
}

export default App;
