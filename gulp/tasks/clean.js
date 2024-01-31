import {deleteAsync as del} from 'del';
import paths from '../config/config.js';

const clean = () => del([paths.buildFolder], {force: true});

export default clean;