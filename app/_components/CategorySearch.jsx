import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const CategorySearch = () => {
  return (
    <div className="h-[50vh] flex flex-col items-center gap-3 text-center">
      <h1 className="font-bold text-4xl">
        Search <span className="text-primary">Doctors</span>
      </h1>
      <h2 className="text-gray-500 text-xl tracking-wide">
        Search Your Doctor and Book an Appointment in just one click
      </h2>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default CategorySearch;
