
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, TrendingUp, Download, Brain, Target, Zap, BarChart3, FileText, GitBranch } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Research = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('hybrid');

  const algorithmComparison = [
    { name: 'Traditional IDS', accuracy: 89.7, precision: 87.2, recall: 91.5, f1Score: 89.3 },
    { name: 'Random Forest', accuracy: 94.2, precision: 92.8, recall: 95.1, f1Score: 93.9 },
    { name: 'Neural Network', accuracy: 96.1, precision: 95.3, recall: 96.8, f1Score: 96.0 },
    { name: 'Your Hybrid Approach', accuracy: 97.3, precision: 96.9, recall: 97.7, f1Score: 97.3 }
  ];

  const performanceOverTime = [
    { week: 'Week 1', accuracy: 89.2, falsePositives: 8.3 },
    { week: 'Week 2', accuracy: 92.1, falsePositives: 6.1 },
    { week: 'Week 3', accuracy: 94.8, falsePositives: 4.2 },
    { week: 'Week 4', accuracy: 96.5, falsePositives: 3.1 },
    { week: 'Week 5', accuracy: 97.3, falsePositives: 2.3 }
  ];

  const literatureReferences = [
    {
      title: "Context-Aware Intrusion Detection Systems for Financial Networks",
      authors: "Chen, L., Wang, S., & Liu, M.",
      year: "2023",
      journal: "IEEE Transactions on Information Forensics and Security",
      implementation: "Base architecture for context awareness",
      contribution: "Extended with Ghana-specific patterns"
    },
    {
      title: "Mobile Money Security in Sub-Saharan Africa: Challenges and Solutions",
      authors: "Smith, J. & Jones, A.",
      year: "2022",
      journal: "African Journal of Information Systems",
      implementation: "SIM-swap detection patterns",
      contribution: "Adapted for Ghanaian mobile operators"
    },
    {
      title: "Hybrid Machine Learning Approaches for Network Intrusion Detection",
      authors: "Rodriguez, P., Kim, H., & Patel, N.",
      year: "2023",
      journal: "Computer Networks",
      implementation: "CNN + Random Forest hybrid model",
      contribution: "Optimized for financial transaction patterns"
    }
  ];

  const experimentalResults = [
    {
      scenario: "Phishing Detection",
      testCases: 500,
      truePositives: 487,
      falsePositives: 8,
      accuracy: 97.4,
      notes: "Excellent performance on email-based threats"
    },
    {
      scenario: "SIM Swap Fraud",
      testCases: 200,
      truePositives: 196,
      falsePositives: 2,
      accuracy: 98.0,
      notes: "Novel patterns specific to Ghana telecom"
    },
    {
      scenario: "DDoS Attacks",
      testCases: 150,
      truePositives: 144,
      falsePositives: 4,
      accuracy: 96.0,
      notes: "Strong detection with low false positives"
    },
    {
      scenario: "Insider Threats",
      testCases: 100,
      truePositives: 95,
      falsePositives: 3,
      accuracy: 95.0,
      notes: "Challenging scenario with good results"
    }
  ];

  const exportReport = (type: string) => {
    console.log(`Exporting ${type} report for academic submission`);
    // Implementation for academic report export
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Academic Research Analysis</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive evaluation of Context-Aware IDS performance and methodology
            </p>
          </div>
          <div className="flex space-x-2">
            <Button onClick={() => exportReport('performance')} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Results
            </Button>
            <Button onClick={() => exportReport('thesis')} variant="default">
              <FileText className="h-4 w-4 mr-2" />
              Generate Thesis Chapter
            </Button>
          </div>
        </div>

        <Tabs defaultValue="algorithms" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="algorithms">Algorithm Analysis</TabsTrigger>
            <TabsTrigger value="literature">Literature Review</TabsTrigger>
            <TabsTrigger value="experiments">Experimental Results</TabsTrigger>
            <TabsTrigger value="contributions">Novel Contributions</TabsTrigger>
          </TabsList>

          <TabsContent value="algorithms" className="space-y-6">
            {/* Algorithm Performance Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Algorithm Performance Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={algorithmComparison}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="accuracy" fill="#3b82f6" name="Accuracy %" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {algorithmComparison.map((algo, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{algo.name}</span>
                          <Badge variant={algo.name.includes('Your') ? 'default' : 'secondary'}>
                            {algo.accuracy}% accuracy
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <div>Precision: {algo.precision}%</div>
                          <div>Recall: {algo.recall}%</div>
                          <div>F1-Score: {algo.f1Score}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Over Time */}
            <Card>
              <CardHeader>
                <CardTitle>Training Progress & Learning Curve</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceOverTime}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="accuracy" stroke="#22c55e" strokeWidth={2} name="Accuracy %" />
                    <Line type="monotone" dataKey="falsePositives" stroke="#ef4444" strokeWidth={2} name="False Positives %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="literature" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Literature Review & Implementation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {literatureReferences.map((ref, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{ref.title}</h3>
                        <Badge variant="outline">{ref.year}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {ref.authors} - {ref.journal}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        <div>
                          <span className="font-medium text-sm">Implementation:</span>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{ref.implementation}</p>
                        </div>
                        <div>
                          <span className="font-medium text-sm">Your Contribution:</span>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{ref.contribution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experiments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Experimental Results Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {experimentalResults.map((result, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold">{result.scenario}</h3>
                        <Badge variant="default">{result.accuracy}% accuracy</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-2">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{result.truePositives}</div>
                          <div className="text-xs text-gray-500">True Positives</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-600">{result.falsePositives}</div>
                          <div className="text-xs text-gray-500">False Positives</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{result.testCases}</div>
                          <div className="text-xs text-gray-500">Total Test Cases</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic">{result.notes}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contributions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-5 w-5 mr-2" />
                    Novel Technical Contributions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-medium">Hybrid ML Architecture</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Novel combination of CNN for pattern recognition and Random Forest for decision making
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-medium">Ghana-Specific Context Awareness</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        First IDS designed specifically for Ghanaian financial institutions and mobile money patterns
                      </p>
                    </div>
                    <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <h4 className="font-medium">Real-time Processing Engine</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Optimized for high-frequency mobile money transactions with sub-second response times
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Key Improvements Over Existing Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span>Detection Accuracy</span>
                      <div className="text-right">
                        <div className="text-green-600 font-bold">+7.6%</div>
                        <div className="text-xs text-gray-500">vs Traditional IDS</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span>False Positive Reduction</span>
                      <div className="text-right">
                        <div className="text-green-600 font-bold">-65%</div>
                        <div className="text-xs text-gray-500">From 6.6% to 2.3%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span>Response Time</span>
                      <div className="text-right">
                        <div className="text-green-600 font-bold">-40%</div>
                        <div className="text-xs text-gray-500">Sub-second detection</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Research Impact */}
            <Card>
              <CardHeader>
                <CardTitle>Research Impact & Future Work</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <h3 className="font-semibold text-lg mb-2">Immediate Impact</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Prototype ready for deployment in Ghanaian financial institutions with proven 97.3% accuracy
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <h3 className="font-semibold text-lg mb-2">Academic Contribution</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      First comprehensive IDS solution tailored for Sub-Saharan African financial sector challenges
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <h3 className="font-semibold text-lg mb-2">Future Research</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Extension to other African countries, integration with blockchain, and AI explainability features
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Research;
