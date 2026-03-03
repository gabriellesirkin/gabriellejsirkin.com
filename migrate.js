#!/usr/bin/env node
// One-time migration: converts content/projects/*/meta.json to index.md frontmatter
'use strict';

const fs   = require('fs');
const path = require('path');

const dir      = 'content/projects';
const projects = fs.readdirSync(dir)
  .filter(d => !d.startsWith('_') && fs.statSync(path.join(dir, d)).isDirectory())
  .filter(d => fs.existsSync(path.join(dir, d, 'meta.json')));

let migrated = 0;

projects.forEach(id => {
  const jsonPath = path.join(dir, id, 'meta.json');
  const mdPath   = path.join(dir, id, 'index.md');

  const meta = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  // Build frontmatter lines
  const lines = ['---'];
  if (meta.title)                      lines.push(`title: ${meta.title}`);
  if (meta.client)                     lines.push(`client: ${meta.client}`);
  if (meta.cat)                        lines.push(`cat: ${meta.cat}`);
  if (meta.filter)                     lines.push(`filter: ${meta.filter}`);
  if (meta.photographer)               lines.push(`photographer: ${meta.photographer}`);
  if (meta.date)                       lines.push(`date: ${meta.date}`);
  if (meta.skills && meta.skills.length) lines.push(`skills: ${meta.skills.join(', ')}`);
  if (meta.cardImage) {
    if (meta.cardImage.ratio)          lines.push(`card_ratio: ${meta.cardImage.ratio}`);
    if (meta.cardImage.placeholder)    lines.push(`card_placeholder: ${meta.cardImage.placeholder}`);
  }
  if (meta.comingSoon)                 lines.push(`coming_soon: true`);
  if (meta.images && meta.images.length) lines.push(`placeholder_count: ${meta.images.length}`);
  lines.push('---\n');

  const fm = lines.join('\n');

  // Preserve existing body if index.md already exists (strip its frontmatter)
  let body = '';
  if (fs.existsSync(mdPath)) {
    const existing = fs.readFileSync(mdPath, 'utf8');
    const m = existing.match(/^---\n[\s\S]*?\n---\n?([\s\S]*)$/);
    body = m ? m[1] : existing;
  }

  fs.writeFileSync(mdPath, fm + body);
  fs.unlinkSync(jsonPath);
  migrated++;
  console.log(`  migrated: ${id}`);
});

console.log(`\nDone. Migrated ${migrated} projects.`);
