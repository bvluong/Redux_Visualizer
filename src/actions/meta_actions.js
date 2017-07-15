export const RECEIVE_CURRENT_COMPONENT = 'RECEIVE_CURRENT_COMPONENT';
export const RECEIVE_ACTION_OBJECT = 'RECEIVE_ACTION_OBJECT';
export const CLEAR_CURRENT_COMPONENTS = 'CLEAR_CURRENT_COMPONENTS';

export const receiveActionObject = actionObject => ({
  type: RECEIVE_ACTION_OBJECT,
  actionObject
});

export const receiveCurrentComponent = componentName => ({
  type: RECEIVE_CURRENT_COMPONENT,
  componentName
});

export const clearCurrentComponents = () => ({
  type: CLEAR_CURRENT_COMPONENTS
});
