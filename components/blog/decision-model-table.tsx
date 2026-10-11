"use client";

import { useId, useState } from "react";
import modelRows from "./decision-model-data.json";
import "./decision-model-table.css";

type Model = (typeof modelRows)[number];
type SortKey = "name" | "correct" | "seconds" | "cost";
type Direction = "asc" | "desc";

const headers: { key: SortKey; label: string }[] = [
  { key: "name", label: "Model" },
  { key: "correct", label: "Correct" },
  { key: "seconds", label: "Time" },
  { key: "cost", label: "Cost / 1,000" },
];
const sorts: [SortKey, Direction, string][] = [
  ["correct", "desc", "Correct: high to low"], ["correct", "asc", "Correct: low to high"],
  ["seconds", "asc", "Time: fastest first"], ["seconds", "desc", "Time: slowest first"],
  ["cost", "asc", "Cost: lowest first"], ["cost", "desc", "Cost: highest first"],
  ["name", "asc", "Model: A to Z"], ["name", "desc", "Model: Z to A"],
];

export function compareModels(a: Model, b: Model, key: SortKey, direction: Direction) {
  const av = a[key], bv = b[key];
  // Missing measurements stay last in both directions, never treated as zero.
  if (av === null || bv === null) return av === bv ? a.name.localeCompare(b.name) : av === null ? 1 : -1;
  const delta = typeof av === "number" && typeof bv === "number" ? av - bv : String(av).localeCompare(String(bv));
  return (direction === "asc" ? delta : -delta) || a.name.localeCompare(b.name);
}

export default function DecisionModelTable() {
  const id = useId();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<{ key: SortKey; direction: Direction }>({ key: "correct", direction: "desc" });
  const search = query.trim().toLowerCase();
  const rows = modelRows.filter(row => `${row.name} ${row.provider} ${row.id}`.toLowerCase().includes(search))
    .sort((a, b) => compareModels(a, b, sort.key, sort.direction));
  function sortBy(key: SortKey) {
    setSort(current => ({ key, direction: key === current.key ? current.direction === "asc" ? "desc" : "asc" : key === "correct" ? "desc" : "asc" }));
  }
  return (
    <section id="model-comparison" className="decision-models" aria-label="Sortable larger accuracy comparison">
      <div className="dm-toolbar">
        <p className="dm-caption">50 evidence packets · 150 scored findings per model<br />Click a column to sort.</p>
        <div className="dm-controls">
          <input id={`${id}-search`} type="search" placeholder="Filter models" aria-label="Find a model or provider" value={query} onChange={event => setQuery(event.target.value)} />
          <select id={`${id}-sort`} aria-label="Sort models" value={`${sort.key}:${sort.direction}`} onChange={event => { const [key, direction] = event.target.value.split(":") as [SortKey, Direction]; setSort({ key, direction }); }}>
            {sorts.map(([key, direction, label]) => <option key={`${key}:${direction}`} value={`${key}:${direction}`}>{label}</option>)}
          </select>
        </div>
      </div>
      <p className="dm-sr-only" role="status" aria-live="polite">{rows.length} of {modelRows.length} models · {rows.length} tested on this workload</p>
      <table className="dm-table" aria-label="Decision models: 150-finding accuracy comparison">
        <colgroup><col /><col /><col /><col /></colgroup>
        <thead><tr>{headers.map(({ key, label }) => <th key={key} scope="col" className="dm-th" aria-sort={key === sort.key ? sort.direction === "asc" ? "ascending" : "descending" : "none"}>
          <button type="button" aria-label={`Sort by ${label.toLowerCase()}`} onClick={() => sortBy(key)}>{label}<span className="dm-arrow" aria-hidden="true">{key === sort.key ? sort.direction === "asc" ? "↑" : "↓" : "↕"}</span></button>
        </th>)}</tr></thead>
        <tbody>{rows.map(row => <tr key={row.id} data-id={row.id} data-recommended={row.recommended}>
          <td data-label="Model"><div className="dm-model"><span className="dm-icon">
            {/* Provider marks are small local assets; no remote tracker or image transformation needed. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={row.icon} width={25} height={25} alt="" loading="lazy" />
          </span><a href={row.url} target="_blank" rel="noopener noreferrer">{row.name}</a></div></td>
          <td data-label="Correct"><span className="dm-correct">{row.correct}<span className="dm-total"> / {row.total}</span></span><span className="dm-percent">{(100 * row.correct / row.total).toFixed(1)}%</span></td>
          <td data-label="Time">{row.seconds.toFixed(2)}s</td>
          <td data-label="Cost / 1,000">{row.lane === "mercury" ? <span className="dm-free">Free*</span> : `$${row.cost.toFixed(3)}`}</td>
        </tr>)}{rows.length === 0 && <tr className="dm-empty"><td colSpan={4}>No matching models. Try another name or provider.</td></tr>}</tbody>
      </table>
      <div className="dm-footer">
        <p>Time: median end-to-end completion. Cost: reported model charges per 1,000 four-question packets. Three scored findings and one separate diagnostic per packet.</p>
        <p>*Mercury uses promotional free pricing. Shaded rows are my API shortlist. KEV can run locally. Saved answers reused only for identical inputs; models were measured on different dates.</p>
        <p>Scope: decision models with outputs beyond yes/no. Binary-only models, including Span, excluded.</p>
      </div>
    </section>
  );
}
