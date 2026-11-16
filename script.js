const resources = [
  {
    title: "Algebra and Trigonometry",
    category: "mathematics",
    level: "School / Introductory",
    description: "A clear introduction to functions, equations, identities, and graphing techniques.",
    tags: ["Algebra", "Trigonometry", "Graphs"],
    link: "https://openstax.org/details/books/algebra-and-trigonometry-2e"
  },
  {
    title: "Calculus",
    category: "mathematics",
    level: "School / University",
    description: "Concepts of limits, derivatives, integrals, and their applications in real life.",
    tags: ["Calculus", "Differentiation", "Integration"],
    link: "https://openstax.org/details/books/calculus-volume-1"
  },
  {
    title: "Linear Algebra",
    category: "mathematics",
    level: "University",
    description: "Explores vectors, matrices, determinants, vector spaces, and eigenvalues.",
    tags: ["Linear Algebra", "Matrices", "Vectors"],
    link: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
  },
  {
    title: "Probability and Statistics",
    category: "mathematics",
    level: "School / University",
    description: "Builds understanding of probability distributions, data analysis, and inference.",
    tags: ["Statistics", "Probability", "Data"],
    link: "https://openstax.org/details/books/introductory-statistics-2e"
  },
  {
    title: "Differential Equations",
    category: "mathematics",
    level: "University",
    description: "Covers modeling change, solving ODEs, and applications in science and engineering.",
    tags: ["ODEs", "Modeling", "Equations"],
    link: "https://tutorial.math.lamar.edu/Classes/DE/DE.aspx"
  },
  {
    title: "Discrete Mathematics",
    category: "mathematics",
    level: "University / Computing",
    description: "Study logic, combinatorics, graph theory, and algorithmic reasoning.",
    tags: ["Logic", "Graphs", "Combinatorics"],
    link: "https://discrete.openmathbooks.org/"
  },
  {
    title: "Geometry",
    category: "mathematics",
    level: "School / Introductory",
    description: "Focuses on properties, theorems, shapes, angles, and proof-based reasoning.",
    tags: ["Geometry", "Proofs", "Shapes"],
    link: "https://khanacademy.org/math/geometry"
  },
  {
    title: "Number Theory",
    category: "mathematics",
    level: "Advanced",
    description: "Covers divisibility, primes, modular arithmetic, and arithmetic structures.",
    tags: ["Primes", "Modular Arithmetic", "Number Patterns"],
    link: "https://mathworld.wolfram.com/NumberTheory.html"
  },
  {
    title: "Mechanics",
    category: "physics",
    level: "School / University",
    description: "Learn motion, force, energy, momentum, and rotational dynamics.",
    tags: ["Motion", "Forces", "Dynamics"],
    link: "https://openstax.org/details/books/university-physics-volume-1"
  },
  {
    title: "Electricity and Magnetism",
    category: "physics",
    level: "University",
    description: "Understand electric fields, circuits, magnetic forces, and Maxwell’s equations.",
    tags: ["EM", "Fields", "Circuits"],
    link: "https://openstax.org/details/books/university-physics-volume-2"
  },
  {
    title: "Waves and Optics",
    category: "physics",
    level: "School / University",
    description: "Explore vibration, interference, resonance, diffraction, and light behavior.",
    tags: ["Waves", "Light", "Optics"],
    link: "https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_I_-_Mechanics%2C_Sound%2C_Oscillations%2C_and_Waves_(OpenStax)"
  },
  {
    title: "Thermodynamics",
    category: "physics",
    level: "University",
    description: "Study heat, work, internal energy, entropy, and the laws of thermodynamics.",
    tags: ["Heat", "Entropy", "Energy"],
    link: "https://openstax.org/details/books/college-physics-2e"
  },
  {
    title: "Modern Physics",
    category: "physics",
    level: "Advanced",
    description: "Introduces relativity, atomic models, quantum ideas, and modern scientific theory.",
    tags: ["Relativity", "Quantum", "Atoms"],
    link: "https://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html"
  },
  {
    title: "Quantum Physics",
    category: "physics",
    level: "Advanced",
    description: "Covers wave-particle duality, Schrödinger equation, and probability in physics.",
    tags: ["Quantum", "Wavefunction", "Atoms"],
    link: "https://www.khanacademy.org/science/physics/quantum-physics"
  },
  {
    title: "Fluid Mechanics",
    category: "physics",
    level: "University",
    description: "Examines pressure, buoyancy, flow, and fluid behavior in motion.",
    tags: ["Fluids", "Pressure", "Flow"],
    link: "https://www.grc.nasa.gov/www/k-12/airplane/fluids.html"
  },
  {
    title: "Solid Mechanics",
    category: "physics",
    level: "University",
    description: "Covers stress, strain, elasticity, and deformation in materials and structures.",
    tags: ["Stress", "Strain", "Materials"],
    link: "https://ocw.mit.edu/courses/2-001-mechanics-materials-i-fall-2006/"
  }
];

const resourceGrid = document.getElementById("resourceGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let activeFilter = "all";

function renderResources() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = resources.filter((resource) => {
    const matchesFilter = activeFilter === "all" || resource.category === activeFilter;
    const haystack = [
      resource.title,
      resource.category,
      resource.description,
      resource.level,
      ...resource.tags
    ]
      .join(" ")
      .toLowerCase();
    const matchesQuery = haystack.includes(query);
    return matchesFilter && matchesQuery;
  });

  if (!filtered.length) {
    resourceGrid.innerHTML = `
      <div class="resource-card" style="grid-column: 1 / -1; padding: 24px;">
        <h3>No resources found</h3>
        <p>Try a different keyword or switch back to the full maths and physics library.</p>
      </div>
    `;
    return;
  }

  resourceGrid.innerHTML = filtered
    .map(
      (resource) => `
        <article class="resource-card">
          <div class="card-header">
            <span class="subject-chip">${resource.category === "mathematics" ? "Mathematics" : "Physics"}</span>
          </div>
          <div style="padding: 18px;">
            <h3>${resource.title}</h3>
            <div class="resource-meta">
              <span>${resource.level}</span>
            </div>
            <p>${resource.description}</p>
            <div class="card-tags">
              ${resource.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <a href="${resource.link}" target="_blank" rel="noreferrer" class="resource-link">Open resource →</a>
          </div>
        </article>
      `
    )
    .join("");
}

searchInput.addEventListener("input", renderResources);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.toggle("active", btn === button);
    });

    renderResources();
  });
});

renderResources();
