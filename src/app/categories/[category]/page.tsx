"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SignCard } from "@/components/SignCard";
import { categories, getSignsByCategory, searchSigns } from "@/lib/trafficSigns";

export default function CategoryDetailPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const [searchQuery, setSearchQuery] = useState("");

  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">Category Not Found</h1>
        <p className="text-gray-600">The requested category could not be found.</p>
        <Link href="/categories">
          <Button>Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const allCategorySigns = getSignsByCategory(categoryId);
  
  // Filter signs based on search query
  const filteredSigns = searchQuery 
    ? searchSigns(searchQuery).filter(sign => sign.category.id === categoryId)
    : allCategorySigns;

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600">
        <Link href="/" className="hover:text-green-600">Home</Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-green-600">Categories</Link>
        <span>/</span>
        <span className="text-gray-900">{category.name}</span>
      </nav>

      {/* Category Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-5xl">{category.icon}</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
            <h2 className="text-xl text-gray-600">{category.urduName}</h2>
          </div>
        </div>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          {category.description}
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Badge 
            variant="outline" 
            className="text-lg px-4 py-2"
            style={{ 
              backgroundColor: `${category.color === 'yellow' ? '#FEF3C7' : 
                                category.color === 'red' ? '#FEE2E2' : 
                                category.color === 'blue' ? '#DBEAFE' : '#FED7AA'}`,
              borderColor: `${category.color === 'yellow' ? '#F59E0B' : 
                             category.color === 'red' ? '#EF4444' : 
                             category.color === 'blue' ? '#3B82F6' : '#FB923C'}`
            }}
          >
            {allCategorySigns.length} Total Signs
          </Badge>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search Signs</CardTitle>
          <CardDescription>
            Search for specific signs within this category
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="Search by name, description, or Urdu text..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
          {searchQuery && (
            <p className="text-sm text-gray-600 mt-2">
              Found {filteredSigns.length} sign{filteredSigns.length !== 1 ? 's' : ''} 
              matching "{searchQuery}"
            </p>
          )}
        </CardContent>
      </Card>

      {/* Signs Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {searchQuery ? 'Search Results' : `All ${category.name}`}
          </h2>
          <div className="text-sm text-gray-600">
            Showing {filteredSigns.length} of {allCategorySigns.length} signs
          </div>
        </div>

        {filteredSigns.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No signs found
              </h3>
              <p className="text-gray-600 mb-4">
                {searchQuery 
                  ? `No signs match your search "${searchQuery}". Try different keywords.`
                  : "No signs available in this category."
                }
              </p>
              {searchQuery && (
                <Button 
                  variant="outline" 
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSigns.map((sign) => (
              <SignCard key={sign.id} sign={sign} showCategory={false} />
            ))}
          </div>
        )}
      </div>

      {/* Category Information */}
      <Card className={`border-2 ${
        category.color === 'yellow' ? 'border-yellow-300 bg-yellow-50' : 
        category.color === 'red' ? 'border-red-300 bg-red-50' : 
        category.color === 'blue' ? 'border-blue-300 bg-blue-50' : 'border-orange-300 bg-orange-50'
      }`}>
        <CardHeader>
          <CardTitle className={
            category.color === 'yellow' ? 'text-yellow-800' : 
            category.color === 'red' ? 'text-red-800' : 
            category.color === 'blue' ? 'text-blue-800' : 'text-orange-800'
          }>
            About {category.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Purpose</h4>
              <p className="text-sm text-gray-700 mb-4">
                {category.id === 'warning' && 
                  "Warning signs alert drivers to potential hazards, changes in road conditions, or situations that require special attention. They are typically yellow with black text or symbols."
                }
                {category.id === 'regulatory' && 
                  "Regulatory signs inform drivers of specific traffic laws and regulations that must be obeyed. Violations can result in fines or penalties. They are typically white with red borders or red with white text."
                }
                {category.id === 'informational' && 
                  "Informational signs provide helpful guidance to drivers about services, facilities, and points of interest. They help drivers navigate and find necessary services along their route."
                }
                {category.id === 'construction' && 
                  "Construction signs indicate temporary conditions due to road work, construction, or maintenance. They alert drivers to changed traffic patterns and require extra caution."
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">When You See These Signs</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {category.id === 'warning' && (
                  <>
                    <li>• Reduce speed and increase alertness</li>
                    <li>• Prepare for the indicated hazard</li>
                    <li>• Maintain safe following distance</li>
                    <li>• Be ready to stop if necessary</li>
                  </>
                )}
                {category.id === 'regulatory' && (
                  <>
                    <li>• Must comply with the regulation</li>
                    <li>• Failure to comply may result in fines</li>
                    <li>• These are legally enforceable</li>
                    <li>• Always check for additional conditions</li>
                  </>
                )}
                {category.id === 'informational' && (
                  <>
                    <li>• Use the information for planning</li>
                    <li>• Follow directions if needed</li>
                    <li>• No penalty for not following</li>
                    <li>• Helpful for navigation and services</li>
                  </>
                )}
                {category.id === 'construction' && (
                  <>
                    <li>• Reduce speed immediately</li>
                    <li>• Follow flagman instructions</li>
                    <li>• Maintain extra safe distance</li>
                    <li>• Be patient with delays</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-center space-x-4">
        <Link href="/categories">
          <Button variant="outline">
            ← Back to Categories
          </Button>
        </Link>
        <Link href="/quiz">
          <Button>
            Test Your Knowledge →
          </Button>
        </Link>
      </div>
    </div>
  );
}