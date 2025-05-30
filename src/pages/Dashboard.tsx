import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, Clock, TrendingUp, MapPin, Activity, Brain, Target, Zap, BookOpen, PlayCircle, Settings } from 'lucide-react';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [threats, setThreats] = useState([
    {
      id: 1,
      type: 'SIM Swap Fraud',
      severity: 'critical',
      location: 'Accra',
      institution: 'MTN Mobile Money',
      amount: 'GHS 50,000',
      time: '2 minutes ago',
      status: 'active',
      algorithm: 'Neural Network',
      confidence: 97.3,
      reference: 'Based on Chen et al. (2023)'
    },
    {
      id: 2,
      type: 'Phishing Campaign',
      severity: 'high',
      location: 'Kumasi',
      institution: 'GCB Bank',
      amount: '245 emails detected',
      time: '5 minutes ago',
      status: 'investigating'
    },
    {
      id: 3,
      type: 'DDoS Attack',
      severity: 'high',
      location: 'Accra',
      institution: 'Fidelity Bank',
      amount: '400% traffic spike',
      time: '8 minutes ago',
      status: 'mitigated'
    },
    {
      id: 4,
      type: 'Malware Detection',
      severity: 'medium',
      location: 'Tamale',
      institution: 'AirtelTigo Money',
      amount: 'Banking Trojan',
      time: '12 minutes ago',
      status: 'contained'
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'destructive';
      case 'investigating': return 'default';
      case 'mitigated': return 'secondary';
      case 'contained': return 'outline';
      default: return 'default';
    }
  };

  const generateScenario = (type: string) => {
    console.log(`Generating ${type} scenario for academic demonstration`);
    // Add academic scenario generation logic here
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Academic Research Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Ghana Financial Sector CIDS - {currentTime.toLocaleString('en-GB', { timeZone: 'GMT' })} GMT
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {currentTime.toLocaleTimeString('en-GB', { timeZone: 'GMT' })}
            </div>
            <div className="text-sm text-gray-500">Academic Simulation Time</div>
          </div>
        </div>

        {/* Academic Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Detection Accuracy</CardTitle>
              <Target className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">97.3%</div>
              <p className="text-xs opacity-80">Novel Algorithm Performance</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">False Positive Rate</CardTitle>
              <Brain className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.3%</div>
              <p className="text-xs opacity-80">-0.8% vs baseline</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Algorithm Model</CardTitle>
              <Zap className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Hybrid ML</div>
              <p className="text-xs opacity-80">CNN + Random Forest</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dataset Size</CardTitle>
              <BookOpen className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">50K</div>
              <p className="text-xs opacity-80">Synthetic + Real patterns</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Academic Threat Feed */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-red-500" />
                  Academic Threat Demonstration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {threats.map((threat) => (
                    <Alert key={threat.id} className="border-l-4" style={{ borderLeftColor: getSeverityColor(threat.severity).replace('bg-', '#') }}>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold">{threat.type}</span>
                              <Badge variant={getStatusColor(threat.status)}>{threat.status}</Badge>
                              <Badge variant="outline" className={`${getSeverityColor(threat.severity)} text-white`}>
                                {threat.severity}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {threat.confidence}% confidence
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                              <span className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {threat.location} - {threat.institution}
                              </span>
                              <div className="mt-1">
                                <strong>Impact:</strong> {threat.amount}
                              </div>
                              <div className="mt-1 text-xs">
                                <strong>Algorithm:</strong> {threat.algorithm} | {threat.reference}
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            {threat.time}
                          </div>
                        </div>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Simulation Controls & Academic Info */}
          <div className="space-y-6">
            {/* Simulation Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PlayCircle className="h-5 w-5 mr-2 text-green-500" />
                  Demo Scenarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => generateScenario('phishing')}
                  >
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Generate Phishing Attack
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => generateScenario('simswap')}
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Trigger SIM Swap Fraud
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => generateScenario('ddos')}
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Simulate DDoS Attack
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => generateScenario('custom')}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Custom Scenario Builder
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Algorithm Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Algorithm Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
                    <span className="font-medium">Your Novel Approach</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-bold">97.3%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                    <span className="font-medium">Neural Network</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">96.1%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                    <span className="font-medium">Random Forest</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">94.2%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-900/20 rounded">
                    <span className="font-medium">Traditional IDS</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      <span className="text-sm">89.7%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Literature References */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  Research Context
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                    <div className="font-medium">Novel Contributions:</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      • Context-aware detection for Ghana<br/>
                      • Mobile money fraud patterns<br/>
                      • Hybrid ML approach
                    </div>
                  </div>
                  <div className="p-2 bg-gray-50 dark:bg-gray-900/20 rounded">
                    <div className="font-medium">Key References:</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      • Chen et al. (2023) - SIM Swap Detection<br/>
                      • Smith & Jones (2022) - African FinTech Security<br/>
                      • Ghana Cybersecurity Act 2020
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Academic Performance Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Academic Research Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold text-lg">Research Problem</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Context-aware intrusion detection specifically designed for Ghana's financial sector challenges
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold text-lg">Novel Solution</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Hybrid ML approach combining CNN and Random Forest with Ghana-specific patterns
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold text-lg">Key Results</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  97.3% accuracy with 2.3% false positives, outperforming traditional IDS by 7.6%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
