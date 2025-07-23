import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, Loader2, Shield, Package } from "lucide-react";

const VALID_CODES = new Set([
  "ALPHA-2024",
  "BETA-TEST",
  "GAMMA-RAY",
  "DELTA-V",
  "SHADCN-UI-FTW",
]);

export default function Checker() {
  const [inputCode, setInputCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleSubmit = () => {
    if (!inputCode) return;

    setIsLoading(true);
    setStatus("idle");

    setTimeout(() => {
      const isCodeValid = VALID_CODES.has(inputCode.trim().toUpperCase());
      setStatus(isCodeValid ? "success" : "error");
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  
  const resetState = () => {
    setStatus('idle');
    setInputCode('');
  }

  const renderStatus = () => {
    if (status === "success") {
      return (
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
            <CheckCircle2 className="relative w-20 h-20 text-green-500 animate-bounce" />
          </div>
          <div className="space-y-3 animate-pulse">
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
              ✅ Authentic Product
            </h3>
            <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <p className="text-green-700 dark:text-green-300 font-semibold text-lg">
                Product Verified Successfully
              </p>
              <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                This is a genuine product with valid authentication code
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (status === "error") {
      return (
        <div className="flex flex-col items-center gap-6 text-center animate-pulse">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
            <XCircle className="relative w-20 h-20 text-red-500" />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">
              ⚠️ Authentication Failed
            </h3>
            <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <p className="text-red-700 dark:text-red-300 font-semibold text-lg">
                Invalid Product Code
              </p>
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                This code is not recognized. Please verify the code on your product or contact support.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center gap-4 text-center text-muted-foreground">
        <Package className="w-16 h-16 opacity-50" />
        <div className="space-y-2">
          <p className="text-sm font-medium">Ready to verify your product</p>
          <p className="text-xs">Enter the authentication code found on your product</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-8 pt-8">
          <div className="mx-auto mb-4 p-3 bg-blue-500/10 rounded-full w-fit">
            <Package className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Product Authentication
          </CardTitle>
          <CardDescription className="text-base mt-2 text-slate-600 dark:text-slate-300">
            Verify your product is genuine by entering the authentication code
          </CardDescription>
        </CardHeader>
        
        <CardContent className="px-8">
          {status !== "success" ? (
            <div className="space-y-6">
              <div className="space-y-3">
                <label htmlFor="code" className="text-sm font-medium text-slate-700 dark:text-slate-300 block text-center">
                  Enter the code printed on your product
                </label>
                <Input
                  id="code"
                  placeholder="PRODUCT-CODE-HERE"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className={`text-center text-lg tracking-[0.3em] font-mono h-14 text-slate-700 dark:text-slate-200 border-2 transition-all duration-200 ${
                    status === "error" 
                      ? "border-red-300 bg-red-50 dark:bg-red-950/20" 
                      : "border-slate-200 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500/20"
                  }`}
                />
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                  Usually found on product label, packaging, or certificate
                </p>
              </div>
              
              <Button 
                onClick={handleSubmit}
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 shadow-lg" 
                disabled={isLoading || !inputCode}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                    Authenticating Product...
                  </>
                ) : (
                  <>
                    <Shield className="mr-3 h-5 w-5" />
                    Verify Product
                  </>
                )}
              </Button>
            </div>
          ) : null}

          <div className="mt-8 min-h-[200px] flex items-center justify-center">
            {renderStatus()}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center pb-8">
          {status !== 'idle' && (
            <Button 
              variant="outline" 
              onClick={resetState}
              className="px-8 py-2 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
            >
              {status === 'success' ? '🔄 Check Another Product' : '↻ Try Again'}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}