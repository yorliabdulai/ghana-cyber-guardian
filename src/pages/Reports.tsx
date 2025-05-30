
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Calendar, Filter, Plus } from 'lucide-react';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedInstitution, setSelectedInstitution] = useState('all');

  const reportTemplates = [
    {
      id: 1,
      name: 'Executive Security Summary',
      description: 'High-level overview for management and board presentations',
      type: 'Executive',
      frequency: 'Monthly',
      lastGenerated: '2024-01-15',
      format: 'PDF'
    },
    {
      id: 2,
      name: 'Bank of Ghana Compliance Report',
      description: 'Regulatory compliance report for BoG cybersecurity requirements',
      type: 'Compliance',
      frequency: 'Quarterly',
      lastGenerated: '2024-01-01',
      format: 'PDF/Excel'
    },
    {
      id: 3,
      name: 'Threat Intelligence Analysis',
      description: 'Detailed technical analysis of threats and attack patterns',
      type: 'Technical',
      frequency: 'Weekly',
      lastGenerated: '2024-01-14',
      format: 'PDF'
    },
    {
      id: 4,
      name: 'Incident Response Performance',
      description: 'Performance metrics and KPIs for incident response team',
      type: 'Performance',
      frequency: 'Monthly',
      lastGenerated: '2024-01-15',
      format: 'Excel'
    },
    {
      id: 5,
      name: 'Financial Impact Assessment',
      description: 'Cost-benefit analysis and ROI of cybersecurity investments',
      type: 'Financial',
      frequency: 'Quarterly',
      lastGenerated: '2024-01-01',
      format: 'Excel'
    },
    {
      id: 6,
      name: 'Mobile Money Security Report',
      description: 'Specialized report focusing on mobile money fraud and prevention',
      type: 'Specialized',
      frequency: 'Weekly',
      lastGenerated: '2024-01-14',
      format: 'PDF'
    }
  ];

  const recentReports = [
    {
      id: 'RPT-2024-001',
      name: 'January 2024 Executive Summary',
      type: 'Executive',
      generated: '2024-01-15T09:00:00Z',
      size: '2.4 MB',
      downloads: 45,
      status: 'completed'
    },
    {
      id: 'RPT-2024-002',
      name: 'Week 2 Threat Intelligence',
      type: 'Technical',
      generated: '2024-01-14T18:00:00Z',
      size: '5.1 MB',
      downloads: 23,
      status: 'completed'
    },
    {
      id: 'RPT-2024-003',
      name: 'Mobile Money Security Analysis',
      type: 'Specialized',
      generated: '2024-01-14T16:30:00Z',
      size: '3.2 MB',
      downloads: 67,
      status: 'completed'
    },
    {
      id: 'RPT-2024-004',
      name: 'Q1 2024 Compliance Report',
      type: 'Compliance',
      generated: '2024-01-13T14:00:00Z',
      size: '8.7 MB',
      downloads: 12,
      status: 'processing'
    }
  ];

  const keyMetrics = {
    totalReports: 247,
    monthlyReports: 18,
    scheduledReports: 12,
    complianceRate: 98.5
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'executive': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      case 'compliance': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'technical': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'performance': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300';
      case 'financial': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'specialized': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  const generateReport = (templateId: number) => {
    console.log(`Generating report for template ID: ${templateId}`);
    // Mock report generation
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Security Reports</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Generate and manage cybersecurity reports for compliance and analysis
            </p>
          </div>
          
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Custom Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Reports</p>
                  <p className="text-2xl font-bold text-blue-600">{keyMetrics.totalReports}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">This Month</p>
                  <p className="text-2xl font-bold text-green-600">{keyMetrics.monthlyReports}</p>
                </div>
                <Calendar className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Scheduled</p>
                  <p className="text-2xl font-bold text-orange-600">{keyMetrics.scheduledReports}</p>
                </div>
                <Filter className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Compliance Rate</p>
                  <p className="text-2xl font-bold text-purple-600">{keyMetrics.complianceRate}%</p>
                </div>
                <Download className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Report Generation Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Generate New Report</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 items-end">
              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium mb-2">Time Period</label>
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Last 24 Hours</SelectItem>
                    <SelectItem value="weekly">Last 7 Days</SelectItem>
                    <SelectItem value="monthly">Last 30 Days</SelectItem>
                    <SelectItem value="quarterly">Last 3 Months</SelectItem>
                    <SelectItem value="yearly">Last 12 Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium mb-2">Institution</label>
                <Select value={selectedInstitution} onValueChange={setSelectedInstitution}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select institution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Institutions</SelectItem>
                    <SelectItem value="gcb">GCB Bank</SelectItem>
                    <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                    <SelectItem value="fidelity">Fidelity Bank</SelectItem>
                    <SelectItem value="ecobank">Ecobank Ghana</SelectItem>
                    <SelectItem value="airteltigo">AirtelTigo Money</SelectItem>
                    <SelectItem value="vodafone">Vodafone Cash</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 min-w-48">
                <label className="block text-sm font-medium mb-2">Date Range</label>
                <Input type="date" />
              </div>

              <Button className="px-8">
                <FileText className="h-4 w-4 mr-2" />
                Generate
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Report Templates */}
          <Card>
            <CardHeader>
              <CardTitle>Report Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reportTemplates.map((template) => (
                  <div key={template.id} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{template.name}</h3>
                      <Badge className={getTypeColor(template.type)}>{template.type}</Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{template.description}</p>
                    
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <span className="text-gray-500">Frequency: </span>
                        <span>{template.frequency}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Last: </span>
                        <span>{template.lastGenerated}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm text-gray-500">Format: {template.format}</span>
                      <Button size="sm" onClick={() => generateReport(template.id)}>
                        Generate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Reports */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{report.name}</h3>
                        <p className="text-sm text-gray-500">{report.id}</p>
                      </div>
                      <Badge className={getTypeColor(report.type)}>{report.type}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                      <div>
                        <span className="text-gray-500">Generated: </span>
                        <span>{new Date(report.generated).toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Size: </span>
                        <span>{report.size}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Downloads: </span>
                        <span>{report.downloads}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Status: </span>
                        <Badge variant={report.status === 'completed' ? 'default' : 'secondary'}>
                          {report.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" disabled={report.status !== 'completed'}>
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        Share
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Dashboard */}
        <Card>
          <CardHeader>
            <CardTitle>Regulatory Compliance Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Bank of Ghana Requirements</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Incident Reporting</span>
                    <Badge className="bg-green-100 text-green-800">✓ Compliant</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Risk Assessment</span>
                    <Badge className="bg-green-100 text-green-800">✓ Compliant</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Security Controls</span>
                    <Badge className="bg-yellow-100 text-yellow-800">⚠ Pending</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">International Standards</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">ISO 27001</span>
                    <Badge className="bg-green-100 text-green-800">✓ Certified</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">PCI DSS</span>
                    <Badge className="bg-green-100 text-green-800">✓ Compliant</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">SWIFT CSP</span>
                    <Badge className="bg-green-100 text-green-800">✓ Compliant</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Next Reporting Deadlines</h3>
                <div className="space-y-2">
                  <div className="text-sm">
                    <div className="font-medium">BoG Quarterly Report</div>
                    <div className="text-gray-500">Due: March 31, 2024</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">ISO 27001 Audit</div>
                    <div className="text-gray-500">Due: April 15, 2024</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">PCI DSS Assessment</div>
                    <div className="text-gray-500">Due: June 30, 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Reports;
