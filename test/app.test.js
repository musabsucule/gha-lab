import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, health } from '../src/app.js';

test('add sums two numbers', () => assert.equal(add(2, 3), 5));
test('health reports ok', () => assert.equal(health().status, 'ok'));
