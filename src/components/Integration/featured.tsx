"use client";

import React from "react";
import { Sparkles, Database, Book, Monitor } from "lucide-react";
import { ToolCards } from "../common/tool-card";

export default function Featured() {
  const items = [
    {
      icon: <Sparkles />,
      title: "AI Chatbot & CRM",
      description: "Connect with AI chatbots to improve engagement.",
    },
    {
      icon: <Database />,
      title: "ERP System Integration",
      description: "Sync inventory with enterprise resource (ERP) systems.",
    },
    {
      icon: <Book />,
      title: "Supplier & Procurement",
      description: "Seamlessly connect with for automated restocking.",
    },
    {
      icon: <Monitor />,
      title: "POS Integration",
      description: "Sync inventory with POS for real-time updates.",
    },
  ];

  return <ToolCards items={items} />;
}
