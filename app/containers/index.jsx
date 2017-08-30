import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocalStore from '../util/LocalStore';
import { CITYNAME } from '../config/localStoreKey';

import * as userInfoActionsFromOtherFile from '../actions/userinfo';