import { MapPin } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';

interface StateSelectorProps {
  selectedState: string;
  onStateChange: (state: string) => void;
}

const states = [
  { value: 'texas', label: 'Texas', available: true },
  { value: 'california', label: 'California', available: false },
  { value: 'florida', label: 'Florida', available: false },
  { value: 'new-york', label: 'New York', available: false },
  { value: 'illinois', label: 'Illinois', available: false },
];

export function StateSelector({ selectedState, onStateChange }: StateSelectorProps) {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <MapPin className="h-5 w-5 text-primary" />
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Select Your State</label>
            <Select value={selectedState} onValueChange={onStateChange}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Choose a state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem 
                    key={state.value} 
                    value={state.value}
                    disabled={!state.available}
                  >
                    {state.label} {!state.available && '(Coming Soon)'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {selectedState === 'texas' && (
          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              You've selected Texas. All information below is specific to Texas high school requirements and policies.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}