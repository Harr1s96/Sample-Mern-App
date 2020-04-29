import { init as initApm } from '@elastic/apm-rum';

var pathName = window.location.pathname;

var apm = initApm({
    serviceName: "frontend",
    serverUrl: "http://10.217.6.141:8200",
    environment: "Development",
    breakdownMetrics: true,
    distributedTracing: true,
    pageLoadTransactionName: pathName
});

export default apm;