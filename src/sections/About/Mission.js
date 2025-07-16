export function Mission() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-7 md:gap-20">
      <div className="flex-1">
        <h1 className="text-2xl py-3">Our mission</h1>
        <p>
          Our mission is to empower people through sustainable fashion.
          We want everyone to look and feel good, while also doing our part to
          help the environment.We believe that fashion should be
          stylish,affordable and accessible to everyone. Body
          positivity and inclusivity are values that are at the heart of
          our brand.
        </p>
      </div>
      <div className="w-full flex-1">
        <img
          className="rounded-xl w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3ucuWPZQWA5WVoy7PgdUXS5LmH5sw0jUVA&s"
          alt="picc"
        />
      </div>
    </div>
  );
}
