import { datadogRum } from '@datadog/browser-rum'
import { reactPlugin } from '@datadog/browser-rum-react'

datadogRum.init({
  applicationId: '7f79762c-1a0f-4755-9fbf-9427a992bb05',
  clientToken: 'pub38f5d36871fa9f62756b882b82328f2d',
  site: 'us5.datadoghq.com',
  service: 'service',
  env: 'development',
  version: 'latest',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  trackResources: true,
  trackUserInteractions: true,
  trackLongTasks: true,
  plugins: [reactPlugin({ router: false })],
})

datadogRum.startSessionReplayRecording()
