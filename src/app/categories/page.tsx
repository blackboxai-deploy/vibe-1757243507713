"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categories, getSignsByCategory } from "@/lib/trafficSigns";

export default function CategoriesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Traffic Sign Categories
        </h1>
        <h2 className="text-xl text-gray-600">
          ٹریفک نشانات کی اقسام
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Explore all categories of traffic signs used in Pakistan. Each category 
          serves a specific purpose in road safety and traffic management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => {
          const categorySignCount = getSignsByCategory(category.id).length;
          const signSamples = getSignsByCategory(category.id).slice(0, 3);

          return (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{category.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <CardDescription className="text-base">
                        {category.urduName}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge 
                    variant="outline"
                    className="text-sm"
                    style={{ 
                      backgroundColor: `${category.color === 'yellow' ? '#FEF3C7' : 
                                        category.color === 'red' ? '#FEE2E2' : 
                                        category.color === 'blue' ? '#DBEAFE' : '#FED7AA'}`,
                      borderColor: `${category.color === 'yellow' ? '#F59E0B' : 
                                     category.color === 'red' ? '#EF4444' : 
                                     category.color === 'blue' ? '#3B82F6' : '#FB923C'}`
                    }}
                  >
                    {categorySignCount} signs
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-700">{category.description}</p>
                
                {/* Preview of signs in this category */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Sample Signs:</h4>
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {signSamples.map((sign) => (
                      <div 
                        key={sign.id} 
                        className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded border overflow-hidden"
                      >
                        <img
                          src={sign.imageUrl}
                          alt={sign.name}
                          className="w-full h-full object-contain p-1"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zMiAyMFY0NE0yMCAzMkg0NCIgc3Ryb2tlPSIjOUI5QjlCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';
                          }}
                        />
                      </div>
                    ))}
                    {categorySignCount > 3 && (
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded border flex items-center justify-center">
                        <span className="text-xs text-gray-600 font-medium">
                          +{categorySignCount - 3}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                <Link href={`/categories/${category.id}`}>
                  <Button className="w-full" variant="outline">
                    Explore {category.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Category Statistics */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">Quick Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {categories.map((category) => {
              const count = getSignsByCategory(category.id).length;
              return (
                <div key={category.id} className="space-y-1">
                  <div className="text-2xl font-bold text-green-700">{count}</div>
                  <div className="text-sm text-green-600">{category.name}</div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Learning Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Study Strategy</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Start with Warning signs - most common on roads</li>
                <li>• Focus on Regulatory signs for legal compliance</li>
                <li>• Learn shapes and colors for quick recognition</li>
                <li>• Practice with quizzes to reinforce learning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Remember</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Yellow = Warning (be cautious)</li>
                <li>• Red = Prohibition/Stop (must obey)</li>
                <li>• Blue = Information (helpful guidance)</li>
                <li>• Orange = Construction (temporary conditions)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}