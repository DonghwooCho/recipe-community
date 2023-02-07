const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const productRouter = require("./src/routes/product-route");
const memberRouter = require("./src/routes/member-route");
const authRouter = require("./src/routes/auth-route");

app.use("/product", productRouter);
app.use("/member", memberRouter);
app.use("/auth", authRouter);

const { swaggerUi, specs } = require("./src/swagger/swagger-specs");

/* setup의 두 번째 인자는 부가적인 설정 정보를 전달 explore는 검색창을 만들어준다*/
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(5000, () => {
  console.log("PORT 5000 OPEND");
});
