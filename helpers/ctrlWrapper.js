//* Обертка контроллера для проверки и выдачи ошибки в случаи появления,
//* чтобы в каждом из них не прокидывать код через try/catch

const ctrlWrapper = ctrl => {
  const fn = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return fn;
};

module.exports = ctrlWrapper;
