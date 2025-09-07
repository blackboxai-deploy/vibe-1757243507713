"use client";

import { TrafficSign } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface SignCardProps {
  sign: TrafficSign;
  showCategory?: boolean;
}

export function SignCard({ sign, showCategory = false }: SignCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="aspect-square w-full mb-3 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={sign.imageUrl}
            alt={sign.description}
            className="w-full h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMTAwVjIwME0xMDAgMTUwSDIwMCIgc3Ryb2tlPSIjOUI5QjlCIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';
            }}
          />
        </div>
        <div>
          <CardTitle className="text-lg leading-tight">{sign.name}</CardTitle>
          {sign.urduName && (
            <CardDescription className="text-sm text-gray-600 mt-1">
              {sign.urduName}
            </CardDescription>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <p className="text-sm text-gray-700 line-clamp-2">
            {sign.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {showCategory && (
              <Badge
                variant="outline"
                className="text-xs"
                style={{ 
                  backgroundColor: `${sign.category.color === 'yellow' ? '#FEF3C7' : 
                                    sign.category.color === 'red' ? '#FEE2E2' : 
                                    sign.category.color === 'blue' ? '#DBEAFE' : '#FED7AA'}`,
                  borderColor: `${sign.category.color === 'yellow' ? '#F59E0B' : 
                                 sign.category.color === 'red' ? '#EF4444' : 
                                 sign.category.color === 'blue' ? '#3B82F6' : '#FB923C'}`
                }}
              >
                {sign.category.name}
              </Badge>
            )}
            <Badge variant="secondary" className="text-xs">
              {sign.shape}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {sign.color}
            </Badge>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{sign.name}</h3>
                    {sign.urduName && (
                      <p className="text-gray-600 mt-1">{sign.urduName}</p>
                    )}
                  </div>
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={sign.imageUrl}
                    alt={sign.description}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMTAwVjIwME0xMDAgMTUwSDIwMCIgc3Ryb2tlPSIjOUI5QjlCIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';
                    }}
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-700">{sign.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Significance</h4>
                    <p className="text-gray-700">{sign.significance}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Properties</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">{sign.category.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shape:</span>
                        <span className="font-medium capitalize">{sign.shape}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Color:</span>
                        <span className="font-medium capitalize">{sign.color}</span>
                      </div>
                    </div>
                  </div>
                  
                  {sign.keywords.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Keywords</h4>
                      <div className="flex flex-wrap gap-1">
                        {sign.keywords.map((keyword, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}